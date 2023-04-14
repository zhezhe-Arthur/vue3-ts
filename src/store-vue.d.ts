export {};
declare module "vue" {
  interface ComponentCustomProperties {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $store: any;
  }
}
