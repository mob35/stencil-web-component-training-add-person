import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'num-person',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
