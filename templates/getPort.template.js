export const getPortTemplate = () =>`
import detect from 'detect-port';

const isDev = process.env.NODE_ENV === 'development';

const getPort = async (preferredPort) => {
  if (!isDev) return preferredPort;

  const availablePort = await detect(preferredPort);
  if (availablePort !== Number(preferredPort)) {
    console.log(\`⚠️  Port \${preferredPort} is in use. Using \${availablePort} instead.\`);
  }
  return availablePort;
};

export default getPort;
`.trim();