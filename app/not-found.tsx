'use client';

import Link from "next/link";
import Layout from "@/components/Layout";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full mx-auto px-4 py-12 text-center">
          <div className="rounded-lg bg-red-500/20 p-4 inline-flex mb-6">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Página não encontrada
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            A rota solicitada não existe.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" />
            Voltar ao Dashboard
          </Link>
        </div>
      </div>
    </Layout>
  );
}
