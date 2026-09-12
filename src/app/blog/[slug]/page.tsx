"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/data/constants";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ChevronRight,
  Share2,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function BlogArticlePage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = post.title;

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(shareText);
    let shareLink = "";

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "whatsapp":
        shareLink = `https://wa.me/?text=${text}%20${url}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "width=600,height=400");
    }
  };

  return (
    <div>
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {post.author}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Dermatologist & Cosmetic Specialist
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div
              className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }}
            />
          </motion.div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-semibold text-slate-900 dark:text-white">
                Share this article:
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleShare("facebook")}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <FacebookIcon />
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Copy link"
                >
                  <Share2 className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </button>
                {copied && (
                  <span className="text-sm text-emerald-600 dark:text-emerald-400">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {relatedPosts.length > 0 && (
        <Section background="slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Card hover className="h-full">
                      <CardContent className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-3">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-1 mt-4 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
