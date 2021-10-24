function Green {
    process { Write-Host $_ -ForegroundColor Green }
}

function Yellow {
    process { Write-Host $_ -ForegroundColor Yellow }
}

function Blue {
    process { Write-Host $_ -ForegroundColor Blue }
}

$WelcomeText = @"

<-- Welcome to the Blitz Machine -->

This was built by team Blitz (NSUT) for submission in the Myntra Hackerramp 2021.
Hope you like it!
"@

$RepoText = @"

-> Here is the repo: https://www.github.com

"@

$ExitText = @"

<-- Exiting the Blitz Machine -->
Hope you liked our project!

"@

Write-Output $WelcomeText | Green
Write-Output $RepoText | Blue
Write-Output @"
<-- Installing Dependencies -->

"@ | Yellow
yarn
Write-Output @"

<-- Running the project -->
"@ | Yellow
Write-Output "-> You can stop the project any time by pressing CTRL+C." | Blue
npm run dev
Write-Output $ExitText | Green