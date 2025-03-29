import { createFileRoute } from "@tanstack/react-router";
import { Button } from "antd";

import { useAuth } from "~/auth/hooks/useAuth";
import { IconGoogle } from "~icons";
import { LogoFilled } from "~shared/components/logo/LogoFilled";

export const Route = createFileRoute("/_auth/sign-in")({
  component: SignInPage,
});

function SignInPage() {
  const { redirectWithProvider } = useAuth();

  return (
    <div className="h-screen grid md:grid-cols-2">
      <div className="max-w-280 flex items-center flex-col justify-center p-6">
        <LogoFilled className="size-25 mb-6" />

        <h1 className="font-semibold text-3xl md:text-5xl mb-6 text-center">Sign in to get started</h1>

        <div className="mb-10 text-xl md:text-2xl text-center">
          Connect with Google for a seamless, personalized experience.
        </div>

        <Button className="w-63.5 gap-3.5" size="large" onClick={() => redirectWithProvider("google")}>
          <IconGoogle className="size-5" />
          Continue with Google
        </Button>
      </div>
      <div className="hidden md:block size-full">right</div>
    </div>
  );
}
