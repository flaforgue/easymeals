import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Auth } from '#/infrastructure/driving/http/shared/auth/auth.decorator';
import { CreateRecipeInstructionDto } from '#/infrastructure/driving/http/private/cooking/recipe-instruction/inputs/create-recipe-instruction.dto';
import { UpdateRecipeInstructionDto } from '#/infrastructure/driving/http/private/cooking/recipe-instruction/inputs/update-recipe-instruction.dto';
import { DeleteRecipeInstructionDto } from '#/infrastructure/driving/http/private/cooking/recipe-instruction/inputs/delete-recipe-instruction.dto';
import { AuthUser } from '#/core/generic/auth/auth-user.interface';
import { RecipeInstructionReadRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.read-repository';
import { RecipeInstructionWriteRepository } from '#/core/cooking/recipe/repositories/recipe-instruction.write-repository';
import { PrivateBaseController } from '#/infrastructure/driving/http/private/private-base.controller';
import { CreateRecipeInstructionHandler } from '#/core/cooking/recipe/commands/create-recipe-instruction/create-recipe-instruction.handler';
import { CreateRecipeInstructionCommand } from '#/core/cooking/recipe/commands/create-recipe-instruction/create-recipe-instruction.command';
import { UpdateRecipeInstructionHandler } from '#/core/cooking/recipe/commands/update-recipe-instruction/update-recipe-instruction.handler';
import { UpdateRecipeInstructionCommand } from '#/core/cooking/recipe/commands/update-recipe-instruction/update-recipe-instruction.command';

@Controller('private/cooking/recipe-instruction')
export class RecipeInstructionController extends PrivateBaseController {
  public constructor(
    private createRecipeInstructionHandler: CreateRecipeInstructionHandler,
    private updateRecipeInstructionInfosHandler: UpdateRecipeInstructionHandler,
    private recipeInstructionReadRepository: RecipeInstructionReadRepository,
    private recipeInstructionWriteRepository: RecipeInstructionWriteRepository,
  ) {
    super();
  }

  @Post('/create')
  @HttpCode(204)
  public create(
    @Auth() authUser: AuthUser,
    @Body() createRecipeInstructionDto: CreateRecipeInstructionDto,
  ): Promise<void> {
    return this.createRecipeInstructionHandler.handle(
      new CreateRecipeInstructionCommand(
        createRecipeInstructionDto.id,
        createRecipeInstructionDto.recipeId,
        authUser.houseId,
        createRecipeInstructionDto.order,
        createRecipeInstructionDto.text,
        createRecipeInstructionDto.timerNbMinutes,
      ),
    );
  }

  @Post('/update')
  @HttpCode(204)
  public update(
    @Auth() authUser: AuthUser,
    @Body() updateRecipeInstructionDto: UpdateRecipeInstructionDto,
  ): Promise<void> {
    return this.updateRecipeInstructionInfosHandler.handle(
      new UpdateRecipeInstructionCommand(
        updateRecipeInstructionDto.id,
        authUser.houseId,
        updateRecipeInstructionDto.text,
        updateRecipeInstructionDto.timerNbMinutes,
      ),
    );
  }

  @Post('/delete')
  @HttpCode(204)
  public async delete(
    @Auth() authUser: AuthUser,
    @Body() deleteRecipeInstructionDto: DeleteRecipeInstructionDto,
  ): Promise<void> {
    const recipeInstructionToDelete = await this.recipeInstructionReadRepository.findById({
      instructionId: deleteRecipeInstructionDto.id,
      houseId: authUser.houseId,
    });

    await this.recipeInstructionWriteRepository.delete({
      instructionId: deleteRecipeInstructionDto.id,
      houseId: authUser.houseId,
    });

    return this.recipeInstructionWriteRepository.decrementOrdersAfter(
      {
        recipeId: recipeInstructionToDelete.recipeId,
        houseId: authUser.houseId,
      },
      recipeInstructionToDelete.order,
    );
  }
}
