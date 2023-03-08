// import * as ReactFilePond from 'react-filepond';

declare module "*.jpg"
declare module "*.png"

// declare module 'filepond-plugin-file-validate-size' {
//   const FilePondPluginFileValidateSize: any;
//   export default FilePondPluginFileValidateSize;
// }
// declare module 'filepond-plugin-image-preview' {
// const FilePondPluginImagePreview: any;
// export default FilePondPluginImagePreview
// }
// declare module 'react-filepond' {
//   export interface FilePondProps {
//     // filepond-plugin-file-validate-size PROPS
//     allowFileSizeValidation?: boolean;
//     maxFileSize?: string;
//    // Add any other plugins you need in the same way
//   }
// }
// declare module "filepond" {
//   export interface FilePondOptions {
//     /** Enable or disable file type validation. */
//     allowFileTypeValidation?: boolean;
//     /** Array of accepted file types. Can be mime types or wild cards. For instance ['image/*'] will accept all images. ['image/png', 'image/jpeg'] will only accepts PNGs and JPEGs. */
//     acceptedFileTypes?: string[];
//     /** Message shown when an invalid file is added. */
//     labelFileTypeNotAllowed?: string;
//     /** Message shown to indicate the allowed file types. Available placeholders are {allTypes}, {allButLastType}, {lastType}. */
//     fileValidateTypeLabelExpectedTypes?: string;
//     /** Allows mapping the file type to a more visually appealing label, { 'image/jpeg': '.jpg' } will show .jpg in the expected types label. Set to null to hide a type from the label. */
//     fileValidateTypeLabelExpectedTypesMap?: object;
//     /** A function that receives a file and the type detected by FilePond, should return a Promise, resolve with detected file type, reject if can’t detect. */
//     fileValidateTypeDetectType?: (file: globalThis.File, type: string) => Promise<string>;
//   }
// }