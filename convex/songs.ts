import { query, mutation } from "./_generated/server";
import { v } from "convex/values";


export const getSongs = query({

  handler: async (ctx)=>{

    return await ctx.db.query("songs").collect();

  }

});


export const addSong = mutation({

  args:{

    title:v.string(),

    artist:v.string(),

    image:v.string(),

    audioUrl:v.string(),

    type:v.string(),

  },


  handler: async(ctx,args)=>{

    return await ctx.db.insert(
      "songs",
      args
    );

  }

});