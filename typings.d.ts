type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: String;
    description: String;
}