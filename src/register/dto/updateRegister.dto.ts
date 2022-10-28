import { PartialType } from "@nestjs/mapped-types";
import { createRegisterDTO } from "./createRegister.dto";

export class UpdateRegisterDTO extends PartialType (createRegisterDTO) {}