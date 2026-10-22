$ErrorActionPreference = "Stop"
Set-Location "C:\portifoliomy"

$env:GIT_AUTHOR_NAME = "kikemal"
$env:GIT_AUTHOR_EMAIL = "kidistkemal53@gmail.com"
$env:GIT_COMMITTER_NAME = "kikemal"
$env:GIT_COMMITTER_EMAIL = "kidistkemal53@gmail.com"
$env:GIT_AUTHOR_DATE = (& git log -1 --format=%aI)

$git = (Get-Command git).Source
$tree = & $git rev-parse "HEAD^{tree}"
$parent = & $git rev-parse "HEAD^"
Write-Host "git=$git"
Write-Host "tree=$tree"
Write-Host "parent=$parent"

$msgFile = Join-Path $PWD ".git\CLEAN_MSG.txt"
[System.IO.File]::WriteAllText($msgFile, "feat: improve portfolio design and user experience`n")

$pinfo = New-Object System.Diagnostics.ProcessStartInfo
$pinfo.FileName = $git
$pinfo.Arguments = "commit-tree $tree -p $parent"
$pinfo.RedirectStandardInput = $true
$pinfo.RedirectStandardOutput = $true
$pinfo.RedirectStandardError = $true
$pinfo.UseShellExecute = $false
$pinfo.CreateNoWindow = $true
$pinfo.WorkingDirectory = (Get-Location).Path

$proc = [System.Diagnostics.Process]::Start($pinfo)
$proc.StandardInput.Write([System.IO.File]::ReadAllText($msgFile))
$proc.StandardInput.Close()
$new = $proc.StandardOutput.ReadToEnd().Trim()
$err = $proc.StandardError.ReadToEnd()
$proc.WaitForExit()

Write-Host "exit=$($proc.ExitCode) new=$new err=$err"
if ($proc.ExitCode -ne 0 -or -not ($new -match '^[0-9a-f]{40}$')) {
  exit 1
}

& $git reset --soft $new
& $git log -1 --format=fuller
$body = (& $git log -1 --format=%B)
Write-Host "---- MESSAGE ----"
Write-Host "[$body]"
if ($body -match 'Co-authored-by|cursoragent') {
  Write-Host "STILL DIRTY"
  exit 1
}
Write-Host "CLEAN COMMIT"
Remove-Item $msgFile -ErrorAction SilentlyContinue
& $git status -sb
