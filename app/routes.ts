import { index, type RouteConfig, route } from '@react-router/dev/routes'

export default [
  index('./routes/home.tsx'),
  route('suporte', './routes/support.tsx'),
  route('privacidade', './routes/privacy.tsx'),
  route('termos', './routes/terms.tsx'),
] satisfies RouteConfig
