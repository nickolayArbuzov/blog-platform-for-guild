import { Injectable } from '@nestjs/common';
import { QueryBlogDto } from '../../../../helpers/constants/commonDTO/query.dto';
import { BanBlogInfo, Blog } from '../../../../shared/collections/Blog/blogger';
import { UpdateBlogDto } from '../dto/blog.dto';
import { BlogsMongoose } from './blogs.repositoryMongoose';

@Injectable()
export class BlogsRepo {
  constructor(private blogsRepo: BlogsMongoose) {}

  async banOneBlogById(blogId: string, banInfo: BanBlogInfo){
    return await this.blogsRepo.banOneBlogById(blogId, banInfo)
  }

  async findAllBlogs(query: QueryBlogDto){
    return await this.blogsRepo.findAllBlogs(query)
  }
}