"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBukuDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_buku_dto_1 = require("./create-buku.dto");
class UpdateBukuDto extends (0, mapped_types_1.PartialType)(create_buku_dto_1.CreateBukuDto) {
}
exports.UpdateBukuDto = UpdateBukuDto;
//# sourceMappingURL=update-buku.dto.js.map