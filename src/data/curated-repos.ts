import type { Repo } from '../types/repo.type';

export const FEATURED_REPO_NAMES = [
  'backend-comparisons',
  'create-nodejs-app',
  'custom-elements',
  'node-todo-api',
  'know-your-tools',
  'chat-server',
  'test_monorepo',
  'fastify-metrics-demo'
];

export const REPO_HIGHLIGHTS: Record<string, string> = {
  'backend-comparisons': 'Benchmarking different backend stacks on the same workloads.',
  'create-nodejs-app': 'Scaffolding production-ready Nest.js apps with TypeORM.',
  'custom-elements': 'Reimplementing native HTML elements as extensible custom elements.',
  'node-todo-api': 'Full-stack todo app with an Angular front end and Node.js API.',
  'know-your-tools': 'Tips and tricks for everyday development tooling.',
  'chat-server': 'Real-time chat server with a lightweight browser UI.',
  test_monorepo: 'Vue monorepo example with hoisted, linked packages via Yarn.',
  'fastify-metrics-demo': 'Serving Fastify application metrics on a dedicated port.'
};

export const FALLBACK_REPOS: Repo[] = [
  {
    name: 'backend-comparisons',
    description: 'Project to compare different backend technologies and how they perform doing same type of tasks.',
    html_url: 'https://github.com/umarov/backend-comparisons',
    language: 'Ruby',
    homepage: null
  },
  {
    name: 'create-nodejs-app',
    description: 'Generator to create production ready Node.js applications with Nest.js and TypeORM',
    html_url: 'https://github.com/umarov/create-nodejs-app',
    language: 'JavaScript',
    homepage: null
  },
  {
    name: 'custom-elements',
    description: 'Project to reimplement native HTML elements as Custom Elements to provide better extensibility.',
    html_url: 'https://github.com/umarov/custom-elements',
    language: 'TypeScript',
    homepage: 'https://umarov.github.io/custom-elements/'
  },
  {
    name: 'node-todo-api',
    description: 'Todo app with Angular front-end and Node.JS backend',
    html_url: 'https://github.com/umarov/node-todo-api',
    language: 'TypeScript',
    homepage: 'https://umarov.github.io/node-todo-api/'
  },
  {
    name: 'know-your-tools',
    description: 'Repo to show cool tips and tricks about development tools',
    html_url: 'https://github.com/umarov/know-your-tools',
    language: null,
    homepage: 'https://github.com/umarov/know-your-tools'
  },
  {
    name: 'chat-server',
    description: 'Chat server with a simple UI.',
    html_url: 'https://github.com/umarov/chat-server',
    language: 'TypeScript',
    homepage: 'https://umarov.github.io/chat-server/'
  },
  {
    name: 'test_monorepo',
    description: 'Example monorepo of Vue apps with hoisted, deduplicated packages.',
    html_url: 'https://github.com/umarov/test_monorepo',
    language: 'Vue',
    homepage: null
  },
  {
    name: 'fastify-metrics-demo',
    description: 'Repo to show how to serve Fastify metrics on a separate port',
    html_url: 'https://github.com/umarov/fastify-metrics-demo',
    language: 'TypeScript',
    homepage: null
  }
];

export function selectFeaturedRepos(repos: Repo[]): Repo[] {
  const byName = new Map(repos.map((repo) => [repo.name, repo]));

  return FEATURED_REPO_NAMES.map((name) => byName.get(name)).filter((repo): repo is Repo => Boolean(repo));
}
