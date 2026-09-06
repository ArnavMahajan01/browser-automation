export default function DashboardPage() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          You are signed in. This is a protected route.
        </p>
      </div>
    </div>
  )
}
