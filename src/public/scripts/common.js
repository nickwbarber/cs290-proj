export default {
    disableLinksToCurrentPage,
};

export function disableLinksToCurrentPage(query) {
    const homeLink = document.querySelector(query);
    homeLink.setAttribute('href', '#');
}
