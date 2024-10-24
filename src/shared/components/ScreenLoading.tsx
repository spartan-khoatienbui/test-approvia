import { Spin } from "antd";

export function ScreenLoading() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-neutral-500/20">
      <Spin spinning />
    </div>
  );
}
