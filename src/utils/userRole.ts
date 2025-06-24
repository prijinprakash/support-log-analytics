
// Mock user role utility - in a real app this would come from authentication/API
export type UserRole = 'admin' | 'user' | 'moderator';

export const getCurrentUserRole = (): UserRole => {
  // For now, we'll use a hardcoded value
  // In a real app, this would check authentication state or make an API call
  const mockRole = localStorage.getItem('mockUserRole') || 'user';
  return mockRole as UserRole;
};

export const setMockUserRole = (role: UserRole) => {
  localStorage.setItem('mockUserRole', role);
};

export const isAdmin = (): boolean => {
  return getCurrentUserRole() === 'admin';
};

export const hasRole = (requiredRole: UserRole): boolean => {
  const currentRole = getCurrentUserRole();
  return currentRole === requiredRole;
};
