"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto px-4 relative z-10"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-4xl mx-auto mb-8 shadow-xl">
          404
        </div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
          moved or doesn&apos;t exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button>
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
          <Search className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
            Looking for something specific?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Try using our navigation menu or search for treatments, blog posts,
            or contact information.
          </p>
          <Link href="/treatments">
            <Button variant="ghost" className="w-full">
              Browse Treatments
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
