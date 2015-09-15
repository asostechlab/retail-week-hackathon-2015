Import-Module WebAdministration

if (Test-Path IIS:\AppPools\AsosCodingStyle.Web)
{
    Write-Host "IIS app pool AsosCodingStyle.Web already exists - skipping"
}
else
{
    Write-Host "Creating IIS app pool AsosCodingStyle.Web"
    
    New-WebAppPool AsosCodingStyle.Web
    Set-ItemProperty IIS:\AppPools\AsosCodingStyle.Web managedRuntimeVersion v4.0
}

if (Test-Path IIS:\Sites\AsosCodingStyle.Web)
{
    Write-Host "IIS website already exists - skipping"
}
else
{
    Write-Host "Creating IIS site AsosCodingStyle.Web"

    $currentFileItem = (Get-Variable MyInvocation).Value.MyCommand.Path | Get-Item
    $currentDirectoryItem =  Get-Item $currentFileItem.DirectoryName

    New-Website -Name AsosCodingStyle.Web -Force -Port 1214 -PhysicalPath "$currentDirectoryItem\AsosCodingStyle.Web" -ApplicationPool AsosCodingStyle.Web
}











if (Test-Path IIS:\AppPools\AsosCodingStyle.WebApi)
{
    Write-Host "IIS app pool AsosCodingStyle.WebApi already exists - skipping"
}
else
{
    Write-Host "Creating IIS app pool AsosCodingStyle.WebApi"
    
    New-WebAppPool AsosCodingStyle.WebApi
    Set-ItemProperty IIS:\AppPools\AsosCodingStyle.WebApi managedRuntimeVersion v4.0
}

if (Test-Path IIS:\Sites\AsosCodingStyle.WebApi)
{
    Write-Host "IIS website already exists - skipping"
}
else
{
    Write-Host "Creating IIS site AsosCodingStyle.WebApi"

    $currentFileItem = (Get-Variable MyInvocation).Value.MyCommand.Path | Get-Item
    $currentDirectoryItem =  Get-Item $currentFileItem.DirectoryName

    New-Website -Name AsosCodingStyle.WebApi -Force -Port 1215 -PhysicalPath "$currentDirectoryItem\AsosCodingStyle.WebApi" -ApplicationPool AsosCodingStyle.WebApi
}