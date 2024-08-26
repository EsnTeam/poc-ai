export const ASSISTANTS: {
  main: string;
  noTool4o: string;
  basic4ov2: string;
  noTool4oMini: string;
} = {
  main: 'asst_cJnqTodNOv0T24dsRwoYa9H8',
  noTool4o: 'asst_xnYheIkZ9IhgmTybcte8AZHt',
  noTool4oMini: 'asst_EKumrNC1Cd33s4vVlAk8LB4p',
  basic4ov2: 'asst_3731TcebBSorttcxm9ySldVI',
};

export const THREADS: { main: string } = {
  main: 'thread_v3NX49Qu4OJcQKNyFluQPj9H',
};

export const FILES: {
  //   baseUmlFile: string;
  //   baseTxtFile: string;
  min_v1: string;
} = {
  //   baseUmlFile: 'file-73rksg08P20x4MFFRo8Q8pdE',
  //   baseTxtFile: 'file-wuKZyVhKcMObI3Ka7eALpdrF',
  min_v1: 'file-XuzmoEqTKF567mQZspfp4UBZ',
};

export const VECTOR_STORES: { main: string } = {
  main: 'vs_s4mIGjUIeHYWx6tER8fzx7KM',
};

export const THREADS_COOKIE_NAME = 'esn-opeanai-threads';
export const CONFIG_COOKIE_NAME = 'esn-ai-user-config';

export const MODELS_PRICING = {
  'gpt-4o': {
    input: 5,
    output: 15,
  },
  'gpt-4o-mini': {
    input: 0.15,
    output: 0.6,
  },
};
