if (sign_ver === 1 || sign_ver === "1") {
  url = `${downloadHost}/data/apk/${name}`;
} else {
  url = `${downloadHost}/data/apkv2/${name}`;
}
if (pkg_name && this.vidmatePkgNameList.includes(pkg_name)) {
  if (publish) {
    url += `?pub=${publish}`;
  }
}