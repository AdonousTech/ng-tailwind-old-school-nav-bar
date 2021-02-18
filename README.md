# Old School Icon Nav Bar Angular/TailWindCSS Component

## Releases
- RELEASE 001 (v1.0.0) 2/17/2021 
    - First release


## Description

A basic component built with **Angular** and **Tailwind CSS**.

The application itself is a great tool to learn Angular. Check out the way I have structured the app
and the component. Thanks!

********************************************************************************************************

### You might also be interested in:

- Architecture
    - No backend architecture wired to this starter spa. Layers need to be individually added as needed
- Authentication
    - Wired for **manual** *BASIC* Amplify auth integration. Requires AWS Resource values. *See* `authData` object in `src\environment.ts`
    - *AWS Auth resources must be deployed separately before using*
- Library Vendors
    - Lodash
    - Amplify (core and auth only)
        - **Manual** Amplify scaffolding is ready, requires app-specific parameters. Parameters
        are pulled from `src\environments` and referenced in `src\amplify-config`
- Component Vendors
    - Ng Material
    - Kendo UI (Restricted license)
    - Ng Bootstrap
- Style Vendors
    - Bootstrap
    - Ng Material overrides where necessary
- Deployment
    - Wired for CodePipeline deployment. Need to add value for **deploymentSourceBucketLocation** in package.json (s3://bucketname)
    - Need to add CodeBuild output S3 bucket **name** to `buildspecs\buildspec.yml` @ `env > variables > S3_BUCKET`
    - Currently provides for single AWS CodePipeline (not production ready)
    - SPA deployment to AWS requires **prior full infrastructure deployment (CFT)**
***
Copyright 2020-2021 Adonous Tech LLC, or its affiliates. All Rights Reserved. This project is not licensed for reuse, reproduction, or redistribution. You may use the contained code for **reference** purposes only. 

