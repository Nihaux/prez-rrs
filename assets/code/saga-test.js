describe('load more article', () => {
  const data = {};
  data.status = 'published';
  data.page = 2;
  data.limit = 2;
  data.order = fromJS({ att: 'test', order: 'asc' });

  data.gen = loadMoreArticles(la.loadMoreArticles(data.status, data.page));

  data.request = testConstructGetArticleRequest(data.gen, data.status, data.page);

  it('should show the loader', () => {
    expect(data.gen.next(mockFilteredCategories).value).toEqual(
      put(uia.moreArticlesLoading(true)),
    );
  });
  it('should put a request to get the next article for the list', () => {
    expect(data.gen.next().value).toEqual(
      put(data.request),
    );
  });

  it('should wait for the response', () => {
    expect(data.gen.next().value.TAKE).toBeDefined();
  });
  it('should add the articles to the list', () => {
    const articles = [
      { id: 'blip' },
      { id: 'blop' },
    ];
    data.response = response(RESOURCES.GET.ARTICLES, data.request.meta.id, articles, false);
    expect(data.gen.next(data.response).value).toEqual(
      put(la.addListArticles(data.status, articlesFromJson(articles))),
    );
  });
  it('should hide the loader', () => {
    expect(data.gen.next().value).toEqual(
      put(uia.moreArticlesLoading(false)),
    );
  });
  it('should be done', () => {
    expect(data.gen.next().done).toBeTruthy();
  });
});