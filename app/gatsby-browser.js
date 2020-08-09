export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This tutorial has been updated. ` + `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) {
    // if redirect to anchors, do not retain scroll position
    return false;
  }

  // otherwise use default scroll behavior to retain scroll position
  return true;
};
