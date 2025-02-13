/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './env.mjs';

import type { NextConfig } from 'next';

const nextConfig = {
    /* config options here */
} satisfies NextConfig;

export default nextConfig;
