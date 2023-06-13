import styles from './Post.module.css';

import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from '../components/Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({author,publishedAt, content}){
    const [comments, setComments]= useState([]);
    const [newCommentText, setNewCommmentText] = useState('')
    
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",
    {locale:ptBR});

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(){
        event.preventDefault();
        const newComment = event.target.comment.value; //Pega o texto da tag pelo name
        setComments([...comments,newComment]); //Valor atual, acréscimo do valor
        setNewCommmentText('');
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommmentText(event.target.value);
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line =>{
                        if(line.type == 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        }
                        else if(line.type == 'link'){
                            return <p key={line.content}> <a href='#'>{line.content}</a> </p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type='submit' disabled={newCommentText.length === 0}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
            {
                comments.map(comment=>{
                    return ( 
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                        
                    )
                })
            }
            </div>
        </article>
    );
}