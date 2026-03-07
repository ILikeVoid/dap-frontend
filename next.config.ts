import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	sassOptions: {
		additionalData: `@use "@/styles/variables.scss" as *;`
	}
}

export default nextConfig;
