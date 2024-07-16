import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FactoryModule = buildModule("FactoryModule", (m) => {
  const factory = m.contract("UniswapV3Factory", []);

  return { factory };
});

export default FactoryModule;
