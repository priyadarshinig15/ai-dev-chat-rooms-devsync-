'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'

export default function AuthErrorPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border bg-card">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-2xl text-foreground">Authentication Error</CardTitle>
          <CardDescription className="text-muted-foreground">
            There was a problem confirming your email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            The confirmation link may have expired or is invalid. Please try signing up again.
          </p>
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => router.push('/auth/sign-up')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/auth/login')}
              className="border-border text-foreground hover:bg-secondary w-full"
            >
              Back to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
