# What is object storage?
Object storage, also known as object-based storage, is a computer data storage architecture designed to handle large amounts of unstructured data. Unlike other architectures, it designates data as distinct units, bundled with metadata and a unique identifier that can be used to locate and access each data unit.
# Types of cloud services supported
* [AWS](https://aws.amazon.com)
* [Azure](https://azure.microsoft.com/en-us/)
# Prerequisites
```
npm install object-store-wrapper@latest
```
# Config
For cloud services to make a connection with the object-store you need a `default-env.json` with the current template:
```json
{
    "VCAP_SERVICES": {
        "objectStore": [
            {
                "label": "objectstore",
                "plan": "s3-standard",
                "name": "your_object-store_name",
                "tags": [
                    "blobStore",
                    "objectStoreAWS"
                ],
                "credentials": {
                    "access_key_id": "lorem ipsum",
                    "bucket": "lorem ipsum",
                    "host": "lorem ipsum",
                    "region": "lorem ipsum",
                    "secret_access_key": "lorem ipsum",
                    "uri": "lorem ipsum",
                    "username": "lorem ipsum"
                }
            },
            {
                "label": "objectstore",
                "plan": "azure-standard",
                "name": "your_object-store_name",
                "tags": [
                    "blobStore",
                    "objectStoreAZURE"
                ],
                "credentials": {
                    "sas_token": "lorem ipsum",
                    "container_name": "lorem ipsum",
                    "container_uri": "lorem ipsum",
                    "region": "lorem ipsum",
                    "account_name": "lorem ipsum"
                }
            }
        ],
        "serviceProvider": [
            {
                "tag": "AWS"
            },
            {
                "tag": "AZURE"
            }
        ]
    }
}
```

# Usage:

```
process.env.SERVICE_PROVIDER = "AWS";
//or AZURE, depends on what do you want to use it for
const { objectStore } = require("object-store-wrapper");

const example = await objectStore.uploadFile([
    {
      FILE: "insert_buffer_from_image_here",
      FILE_TYPE: "jpg",
      FIXED_KEY: "example1",
      PREFIX: "example2",
      FILE_NAME: "example3",
    },
  ]);

await objectStore.getFileFromPrefix("example1/example2/example3");
await objectStore.getFileLinkFromPrefix("example1/example2/example3");
await objectStore.deleteFileFromPrefix(["example1/example2/example3"]);
await objectStore.copyFiles([{sourceKey: "example1",destinationKey: "where_do_you_want_it"}]);
let blobs = await objectStore.getAllBlobs();
```
