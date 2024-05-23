import {useEffect, useState} from 'react';
import {PermissionName, PermissionStatus} from './permissionTypes';
import {permissionService} from './permissionService';

export function usePermission(permission: PermissionName) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<PermissionStatus>();

  async function checkPermission() {
    try {
      setIsLoading(true);
      const initialStatus = await permissionService.check(permission);

      if (initialStatus === 'denied') {
        const currentStatus = await permissionService.request(permission);
        setStatus(currentStatus);
      } else {
        setStatus(initialStatus);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    status,
  };
}
