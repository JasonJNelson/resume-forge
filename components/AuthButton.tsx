"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function AuthButton() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (user) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <span className="text-gray-600">{user.email}</span>
        <button
          onClick={() => supabase.auth.signOut()}
          className="text-red-500 hover:underline"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-sm">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
        redirectTo={typeof window !== "undefined" ? window.location.origin + "/dashboard" : undefined}
      />
    </div>
  );
}
