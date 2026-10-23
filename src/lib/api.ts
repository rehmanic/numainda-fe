'use client';

import { useAuth } from '@clerk/nextjs';
import { useCallback } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export function useApiClient() {
  const { getToken } = useAuth();

  const apiFetch = useCallback(
    async (endpoint: string, options: RequestInit = {}) => {
      const token = await getToken();
      const headers = new Headers(options.headers || {});

      headers.set('ngrok-skip-browser-warning', 'true');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      if (!headers.has('Content-Type') && options.body && !(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
      }

      const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
      return fetch(url, {
        ...options,
        headers,
      });
    },
    [getToken],
  );

  return { apiFetch, apiBaseUrl: API_BASE_URL };
}
