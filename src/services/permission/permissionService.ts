import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';
import {
  request as rnRequest,
  check as rnCheck,
  PermissionStatus as RnPermissionStatus,
  Permission as RnPermission,
  PERMISSIONS as RN_PERMISSIONS,
} from 'react-native-permissions';

const mapName: Record<PermissionName, RnPermission> = {
  location_always: RN_PERMISSIONS.IOS.LOCATION_ALWAYS,
  location_when_in_use: RN_PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
};

const mapStatus: Record<RnPermissionStatus, PermissionStatus> = {
  blocked: 'never_ask_again',
  denied: 'denied',
  granted: 'granted',
  limited: 'granted',
  unavailable: 'unavailable',
};

async function check(name: PermissionName) {
  const status = await rnCheck(mapName[name]);
  return mapStatus[status];
}

async function request(name: PermissionName) {
  const status = await rnRequest(mapName[name]);
  return mapStatus[status];
}

export const permissionService: PermissionService = {
  check,
  request,
};
