import mongoose from 'mongoose'
import moment from 'moment'
import shortId from 'shortid'

const dateSet = moment().format('YYYY-MM-DD')
const postId = shortId.generate()

const boardScehma = new mongoose.Schema({
	id: { type: String, default: postId },
	title: { type: String, required: true },
	date: { type: String, default: dateSet },
	content: { type: String, required: true },
	hits: { type: Number, default: 0 }
})

const Board = mongoose.model('board', boardScehma)

export default Board

/**
 * 
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://openapi.gg.go.kr/PublicGameOfBallGymnasium?Type=json&SIGUN_NM=성남시',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

for (i in info['response']['body']['items']['item']) {
	console.log('체육관이름 :' + info['response']['body']['items']['item'][i]['FACLT_NM'])
}

 * 
 */
