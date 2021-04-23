const mongoCollections = require('../config/mongoCollections');
const comments = mongoCollections.comments;

const { ObjectId } = require('mongodb');

async function addComment(userId, productId, commentText) {

    if (!userId || typeof userId !== "ObjectId") throw 'userId must be input as an ObjectId.';
    if (!productId || typeof productId !== "ObjectId") throw 'productId must be input as an ObjectId.';
    if (!commentText || typeof contentText !== "string") throw 'commentText must be input as a string.';

    /* add a new comment into database */
    
    let newComment = {
        userId: userId,
        productId: productId,
        contentText: contentText
    }

    const insertInfo = await commentCollection.insertOne(newComment);
    if (insertInfo.insertedCount === 0 )
        throw 'Could not add the comment. ';
    const newId = insertInfo.insertedId;
    const pushComment = await getCommentById(newId.toString());

    const commentCollection = await comments();

    return pushComment;
}

async function getComment(commentId) {
    if (!id || typeof id !== "ObjectId ") throw 'You must provide an id to search with.';

    let parsedId = ObjectId(commentId);
    const commentCollection = await comments();
    let commentStat = await commentCollection.findOne({ _id: parsedId });
    if (comment === null) throw 'No comment with that id.';
    comment._id = comment._id.toString();

    return commentStat;
}

module.exports = {
    addComment,
    getComment
}
