hexo.extend.helper.register("listCategories", function (page) {
  var list = [];
  if (page.categories.length > 0) {
    page.categories.forEach((element) => {
      list.push(element.name);
    });
  }
  return list;
});
