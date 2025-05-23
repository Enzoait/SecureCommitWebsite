export const sampleCode: string =
  'export function execute() {\n  return gapi.client.youtube.channels\n    .list({\n      part: ["snippet,contentDetails,statistics"],\n      id: ["Jxnzh_TDgbxjsmPx55FGE7bd8hehdyh3ddkdke"],\n    })\n    .then(\n      function (response) {\n        console.log("Response", response);\n      },\n      function (err) {\n        console.error("Execute error", err);\n      }\n    );\n}\ngapi.load("client:auth2", function () {\n // secure-commit \n gapi.auth2.init({ client_id: "FAKE_CLIENT_ID_THAT_SHOULDN\'T_BE_COMMITED" });// secure-commit \n});';


export const outputFile: string =
  "*Automatically generated by Secure Commit on {date} at {time}*\n" +
  "## The following files contains sensitive info that should likely not appear in your commit :\n" +
  " - c:\\Users\\user\\OneDrive\\Documents\\Project\\my-app\\src\\api\\youtubeApi.js";;