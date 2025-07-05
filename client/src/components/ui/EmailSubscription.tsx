import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

export default function EmailSubscription() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <div className="text-center p-6 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg max-w-md mx-auto">
        <div className="text-green-400 text-2xl mb-2">✓</div>
        <h3 className="text-white font-semibold mb-2">Thank You!</h3>
        <p className="text-green-200 text-sm">
          You'll be the first to know when we launch.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center max-w-md mx-auto">
      <h3 className="text-white font-semibold mb-4 text-lg">
        Be the first to know when we launch
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-slate-800/50 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
          required
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 disabled:opacity-50"
        >
          {isLoading ? "Subscribing..." : "Notify Me"}
        </Button>
      </form>
      <p className="text-slate-400 text-xs mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
