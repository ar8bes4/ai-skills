param (
    [string]$targetPath = "C:\Users\yert1\Documents\agy"
)

# Header
Write-Output "PATH|REPO_NAME|STATUS_SHORT|UNCOMMITTED_COUNT|UNPUSHED_COUNT|BEHIND_COUNT|REMOTE_URL"

# Get .git folders directly (including hidden ones) and find their parent directories
Get-ChildItem -Path $targetPath -Filter ".git" -Recurse -Force -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Parent | ForEach-Object {
    $repoPath = $_.FullName
    $relativePath = $repoPath.Replace($targetPath, "").TrimStart("\")
    $repoName = $_.Name

    Push-Location $repoPath
    try {
        # Uncommitted changes
        $uncommittedCount = (git status --porcelain | Measure-Object).Count
        $statusSummary = if ($uncommittedCount -gt 0) { "MODIFIED" } else { "CLEAN" }

        # Remote URL
        $remote = git remote -v | Select-Object -First 1
        $remoteUrl = if ($remote -match "https?://\S+") { $matches[0] } else { "LOCAL_ONLY" }

        # Ahead/Behind count
        $unpushedCount = 0
        $behindCount = 0
        if ($remoteUrl -ne "LOCAL_ONLY") {
            # Update remote refs before checking status
            git fetch --all --prune --quiet
            
            $branch = git rev-parse --abbrev-ref HEAD
            
            # Ahead (Unpushed)
            $unpushed = git rev-list --count "${branch}@{u}..HEAD" 2>$null
            if ($LASTEXITCODE -eq 0) {
                $unpushedCount = [int]$unpushed
            }

            # Behind (Update available)
            $behind = git rev-list --count "HEAD..${branch}@{u}" 2>$null
            if ($LASTEXITCODE -eq 0) {
                $behindCount = [int]$behind
            }
        }

        # Output
        Write-Output "${relativePath}|${repoName}|${statusSummary}|${uncommittedCount}|${unpushedCount}|${behindCount}|${remoteUrl}"
    }
    catch {
        Write-Warning "Failed: ${repoPath}"
    }
    finally {
        Pop-Location
    }
}
