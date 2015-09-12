Get-ChildItem Scripts\**\*.html | Select {"declare module 'text!./" + $_.Name + "' { }"} | Format-Table -HideTableHeaders > typedefinitions/templates.d.ts

Get-ChildItem Scripts\**\*.html | Select {"declare module 'text!./" + $_.Name + "' { }"} | Format-Table -HideTableHeaders > ../AsosCodingStyle.JsUnitTests/typedefinitions/templates.d.ts