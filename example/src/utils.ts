import { useState } from 'react';

export function useTest() {
  console.log('test', this);
}
