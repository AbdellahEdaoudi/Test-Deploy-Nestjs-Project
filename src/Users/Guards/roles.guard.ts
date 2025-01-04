
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles,context.getHandler())
    if (!roles) {
      console.log('OK-Null Roles');
      return true
    }
    if (roles.includes('user')) {
      return false
    }
    if (roles.includes('admin')) {
      return false
    }
    return true
  }
}
