// chucvu.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.schema';
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async getAllRole() {
    return this.roleService.getAllRole();
  }

  @Get(':id')
  async getRoleById(@Param('id') id: string) {
    return this.roleService.getRoleById(id);
  }

  @Post()
  async createRole(@Body() data: Partial<Role>) {
    return this.roleService.createRole(data);
  }

  @Put(':id')
  async updateRole(@Param('id') id: string, @Body() data: Partial<Role>) {
    return this.roleService.updateRole(id, data);
  }

  @Delete(':id')
  async deleteRole(@Param('id') id: string) {
    return this.roleService.deleteRole(id);
  }
}
