const fs = require("fs");
const axios = require("axios");
const partnerID = [];
const imagesArray = [
  "http://leaders.asiae.co.kr/news/photo/201807/71242_62100_2446.jpg",
  "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/20/b853db37-b6b2-4731-a963-8b3bfe4be1c2.jpg",
  "http://cliimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2018091817242209676798818e98b12113123272.jpg",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQDxAVEA8QFQ8PFQ8PFRUVFRUPFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFysdHR0rKysrLS0tLS0tLS0rLS0tKy0tLS0tKy0tLS0rKy0tLSsrLS0tLS0tLS0tLTctLS0tLf/AABEIAK0BJAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwEEBQYACAf/xABBEAABAwIDBAYHBgUDBQEAAAABAAIRAyEEEjEFQVFxEyJhgZGxBjJCcqHB0QcUIzNSsmKCwuHwFZKiRFOks9I1/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAQACAwEBAQAAAAAAAAAAARECEiExQSJhE//aAAwDAQACEQMRAD8A6kBEGqQEbQsOgQ1TlRgIg1AAaiDUYajDUABiH7o3dbkrLWpjWJgo/dXDTrfAqQ2NQRzWkxie2lxE80w1ltanMbwWh9xadLcl77g4aXTDValS7IPFtvHce9aWGweb2rfxD6WVdtMjUQreHrQrEo34Wk4jpZflILRVEMB3ENAAnndOrYSeQ0AsByCeys1wg/FR0JH5boH6Tdv9u5aZ1l1sLG5U301vvqDSo3L/ABat8d3eqeLw41GnFSxqVjOagIVmq1IcsqBeXioUEry8BOnNCgMFaGD2o5gykZhuk6LMlTKo0K21qjtDlH8P1VGpUJMkkniTKCVCI8VClQggqCpKElB5QolRmVEleQkr0oiVCHOOI8VKuAAEQavAI2hZaQAjAUgIgEHgEYC8AjaEEgIcLiWP9U6GLgjz5JpFigwzPw6XuDzcrEq4xqsMYqtMdqtUnHn8FrE1ZpsVhjEmk8b7abt/Md25WqZB0IPJVHujB1E80p+DadLK0FMKGsx9BzdL8ksYst7FqPaqOJpA6iVMXQjanEAqjiMbNhAG4BLr4fgY+KpVA4aieSltWYY+ogLkrpP8NvNTmWVHKhDKmUBArxKiV6UHl5ezIDUHFVBrxSTXHNezOOjSUDCVBKgYeodwH+d6MYBx1d4K+Ql1RJq4gASSABvOnirw2c3fJ/zsVTa2BYaFUZRdhHkriayK/pBh261mn3Dm/bKr0PSWk94psa85p65bDRAJved3BZbNkNHsq5gsK1jg6NA4/wDEpIlrqsNhalSzGk7tRE630IWnhfR17vzSGaWEPnx0WdhPSVlHRkmSbua2eq0CdeB+Cmv6a1D6lJo5h7/iIWrnxma32+j1IavfPY6PhC8uTf6W4qfWDewMZ87ryCwAjaoCNoXJ1SAjAUAIwqJaEbQhaExoVEkWKds6s3oqYczN1G33pbtClYA/hs90KxK1GtpHQlvO4TW4X9Lg7kVRanMK0yuCmRqCmtjeq9OqeJTGuVFlvMj/ADtRFzt0HnI+KU1yMOUQLq5HrMdzbDh4C/wSH4lhsHCf0mx8DdWSVXrgEQQCOBEoKldipVGKxUoAerLfdJA8NPglMBvJnSDEHfr4KWNSqtWnuVepSgEi0SVo1m3VeqyxnSDPJZVl/eRxUivwBPaArFN1IereLdUbxqifWBEBp36qYmlsbUOjY5lNGEfvIHJWaTnRZoCblfvPgArhqszZ0iS4nsTBgmDUDvP1TRhybknlKIYQcFcTSoYNCO7+yLpm7gT3J33ZMGHVwVenO5niVGd53AdyvCip6JXE1nljzqVU2hhppuncJ8FtGmq2OZ+G/wB0phrlzh0jE0Oq73X+RWw+mquJZ1Xe6/8AaVlpWwGGZEvDiLANZDbRe/ePiug2HsfDVsxNJ3VyjrvzTM/wiNFT2Ph2uaZcGwREzeQOAXS7Fw7W5oMzlnqlo38dV08dXLbqW7CwosKLfj9V5aa8s7W3DBG1CEbVydBBEEIRhUG1G1AExqol+hSNmn8JnuhPfoq+y/ymcgkSrrU1qUEwFaZPaU1pVdpTGlaFhrkYckAog5ENLkt5UFyAlAuokAX7h809xSRqe75qVYiqLqtiWSxw0lrhIsRY3BR7Qx1OkWiq8M6R2Rszd0TE7tNTZedDwQ0gyCJF9R2LC2WKWzdmkNAduAAO4tixj2eSsYnDQFewtTMAd3D4eYKHGiy1jOm0qQjwTejU0hYdyMhUC2lbTh80mriKbPXqMZ7zmjzK+e/tJrP/ANRxTC9xYKghhccoBY02EwNVxtRg4DwTR9S4n0lwNO1THYZp4GvSnwzKlX9Pdls9bH0f5C5/7AV8ywgKmmPo2r9qWyRpii/3aNX5tCoYj7Ytmt9VuIqe7TYB/wAnhfgEqJTR+4V/tqwg9TC13e8abfIlZWM+2nMC1mAgERmdXk+Ap/NfkgYTYJcwmj6O9H9qHE4eniHNDDUznKDIGV7m6n3Vbr6O91/7Suc9Baw+4UBO6r/7XrcNQEG/sv8A2lIvxveioMmJIDmzwHUdf5d66ab9w+a4zY21m0AczS7OWxlMeqN/iuh2NtMVy8hhZkyC5mZzfRazwzvlp5v8heXl5QcSCjalBMaVydRhEEIRBUGExqUEwFAb9FW2Yfw28gnnRV9m/ltVntKvNKNpSgUYK0ycCjBSQUQKB4KmUkFFmWgzMhJQZlBKCSUDTc8m/NelC03PJvzUpFLbeym1zTJcW9E81BABklpb3arP9INimtRewvId6zXU2nO17SCMpk3tHet95ugWMjc58pn8J2QcrWMMl17ngA2Z7yrGPqAQDv7CVWw4jEPOYdGabXC4/MLiHCeTW27VZ2gBE8oK18Y+reFeHNBaZHePNNKqbLd1O/5BXCrEfN/2nf8A6mL9+l8aFI/NcjVXY/aq2Nq4rtOHP/jUVx1VSgULkThZJkn6qKJyWU92FdMC/wAl44NyqK8oHFWXYRyE4RyD9I9GscW4em0aAO+LnFdVsrEl0z+l/wC0ritgj8FnI/uK67Yuv8tT9hU+nx02AwxqCzc2Xh2gdnYuk9G8OWdJLC2cmo1jNos30PJJcLZYBM9kAAX7T4LqKYAJgbh8103wz9NnmoXpXlFcSETUARNXF0MBRgpYKIKqYEYSgUYKBkqts89QJ8qjgq7Q1jSYLzAF9cpO7QQDcqz2laQKMFJBTGAnQTyWkMBRAqnicUymQKtRtMkSA8gEjSQDruRYTHUqk9HVY/LGbK4GJmJjSYPgUMXA5SXJJrNHtBLdjaY9rwBVRalRKpnaNP8AiPIIDtJu5jvgPmmi9KhhueTfmqTcdOlN3iFYoTckRMQJnjr4qWwPebpVQ2PI+SN5ukYi7XCYkOE8JCyqlhTY858bjzWxtCzY4QuNwWzMQ0tjFFzWyC1zW9eQbuOWQRM2gdUds6tGjVDgX1HObexdI04Qksylnlv7KPVPP5BXlzuFxrxYMJHPh/MFbG0X/wDbPcHH+srcsxmyvxv7WdlV3bSrVKdCq9jm4c52U3ubIosaesBHsrhMTgqjfXpuZ74LfNfTx2qR7Lx3H6FCducxzDx/SEz+j5eaBaSIMCxEq+2g0jLYN4L6MqbZYfXLO9pPmVSxuJoVGOaGUnOcIBDac37yU6mvwllNosEfRhfs2ydl4UNcKuEw7yTM1KdMwO9pVl+x9nnXA4ce7T/+WKzjamvw51ILMq1h1neyOqOe+6/fqno7s13/AEbP5Q9vzCy9peh+zAxxGGLDBIIrVNd1hVJ+Cdaa4v0fozQpniD5ldTslkH+Wp+xyysNSZTaKbBDW2AJJ3zqea19nvi/Y4eII+azPa/HRbE2qMOCTTL89uqbiIPDfPwXTbG2sMRnIYWZAwdYi85vouOwVSjliqXTIINMt4XkEjgFt7J2lh6ObL0hz5dch0n+LtXTxjHnXUZjw8l5ZP8Ar9Hg/wD2j6ryKwAUTSgCJq87sYCiBSwUYKIYCiBSwUQVUyVnDZrWXDG1CY/NYx8CZiXCYV8FRKbnpLJfZTalYNyNIYy4y0w1oE8MuiW3DPyhktygNaBA9VugmLq2CiCbRSfs7M7O4gvsM0XjhPeU1uBH6irQUhFV24FnamNwjOHxKcAiDUQsUG/pCMMHAeCdRpAmJjerIwze096CkiaVdFNo9kefmhqUZ0bcaWhEVzScdGlQcC8jcOZ+i0mNcRextPNGKfarhrmTQdTOV2usjQjiFo08I0gXLpAPeQtN2FYTJaCRxunZALAQOATqay24IewyIvr5ynfdHbyByV9rUUK4msw4Eb7lQcE3h5q89DKoyMbsenUaWPaHNOodcf2PauZ2l9nWHewhjq1ImOsyq8wOxtQub8F3hKQ+u09UXdwHzVHA7N+zwMkuxdeqLQ2o5ojva0FbWD9HG0yes582AcZDeUNHxJWy3GAslupLmjWBlME9twUhtU9YbhAsIuddOxZ7QxUOz6cG5ndlc4DzS3bMYbHMZ4ucfMqwHXP+aJzXJqss7Fp8D8D5hMbshg0y99Nh+S0ZUym0xTGDjQUzzZHkVBwvGnTPLpB/UrqhXtUyKP3Nv/YZ/vd9F5Xl5O1OsZARNSwUbSubYwUQQBEEDAiCWEFeoQABq5zWDmUFtlMnQJrcKd8BMpEAQNAjDkQAww4ohSbw8UYBRCmnkKI4IS5WRSHNMa0DQBMpqo1hOgKa3DO7BzVoIgtYmkUcHDs+bVuXKB2zMq0GBTSTQrkTQAIgVK8qPSpleXkEgqSUIXkQYKmUsuhKdX4CU1R1HcVXr4gNbmJAHbZF0p7Eqo4ypaKuIxlojM49vVA7tSqGIxbmixDZn1QAtuUL+CzlXWPg6eVrWjRoAuvUiSCWxcl0uMADQStq/HKOKW9503XVxNc9QrS48z5q2HrVabo5VXWU16KVqgqQUNZMr0rWlShrIlQtcryGuRCJpQBEFhoxqa2i7h4qjjnltNzhq0ZhzF1Y2PtUVQAbP8/7qbNxc8LjcMd58Ez7m0xMnKQ4Xi40TAjC1jI2gcEQKEKQgMIggCIKoMIwlhECgYEQKWCiBQOpJqTRTVUUtobSFJ1JhY53SuLZaWDIIPWdmcLTlbOkuF5IBqVfSBraJrmm4MayjUJc5gaDUa14ZJMzDxeIWjXwjHlrnZpYZble9sGCJhrgJhxE8CVUdsWkaXRdYAMZSzg3IY0NBI9WYAvCofjNoCkRmpvIdZpblOZ8SGgTImIkwJIvdVKu32NkZHZmiqS0lgOamKuZsTJE0XjMARp2xYxOAY55e577s6PIMsBuvVtLTIaZBElreAQu2eIgVHtaW1Gub1HB/SOLnlwc0iSSdI1QBidtspuyPY5sOYwvcWBnWdRbM5pt07DcDyUM2xmfkFMt/GOHLi5ph4ouqnQncALxr2Ka+FpuItBzMeXDWWVG1OVy0TxAHAQp+AphzHNGU0zmGXectRvW4/mvM6yeamhr8foS0hriWgkiSQHGwGpOWI7Uv/Ux+gmzj1S0gkZIAO/1wLbwQmUsM0EOEgtJdrvIcN/vFQ3BCCM7zmaWSSJg79LntK5Xuz+hUMYHAnKW5RJzQPE6DTiltxgdmhpOTKTBboc2+YtlKsU6MA9Y3i4AERYRASqeGB1l0xOY6xMTxFzYq/rweQ1NpNaC4sdrpafUa/QnXrRHYVFbGhoDi09ZxZlFyYzCw3+qn1KLW5iS4uc7NAc5t4a32SJ9UapDqIyi7rOJseJJ+aZyP0zMZtXO/J7A0iC3UgGd+iu08ZmbnDDAyHUavYx8f8lNXAMLsxBJN8xJk77xrclEzAsyBomQGiZucsAGNJgRornNP0BmPl4ZltJbmzXtN4I7OO9X8yoU9nND88mZLt15mxtoMxIVvo1ePbz2Xjv09qJJa1ECtNGLyDOvZ0BleQFwXkHJoggRBYbKx/5b/dK53CvIcIMSQPiuixo/Df7pXNUjccx5rlz9tcXaYLGGejqevuduePqtFpWNXY1wg9zt4PEJ2z8eZ6Kqev7L9zx9V1l+VM1qyialgo2lVkwIglypBVQyVIQBEEDAVIQhSTFzYcSgfQKdPasTEbTaPVIgauOncN6pVNt7mtn+Jx/pH1U7Q6umLkD38XALkn7Qqu9qBwaI+OqUL668Vn/SL1df04GhHNAak6kLlgQEQfYp3OroqbxOo8VNR44hcfs89af1E+TvqE7aAt3AeJUnPwXj5dXTcI1CLpBxC5UM0HCAvVazKYzPMcBvPIK9jHUOE3zaIBXABIcNY1XB4vaDqhj1WfpHz4puWWvA3tpvH8pDT81eyY7LpAblw8QmdII9YeK4NjDxVigAW95+Ef3V1MdqagsZCjpRuI10kd65RlMObBEwQfEX8gntogaAW7FrR1IcOIRgjiFzVKmrlMJpjantUSOKylMKjTtxCgxxCy+iUdEmDUPNeWV0a8mDKtx8F7pAP8lVsxO9SAuWtvY2rLHcj5LnGm47l0OIHUd7rvJc41c+ftri6xBXphzTO6SDwKNRV9V3J3kulQzY21w78OoetoHHf2Ht81ttXHbHoh7Hg/rseFlubExjnhzHXLIh28jS6nG/KtjXCIJYKIFdGDAoq12sEvcG8/kN6xcXtV8lrRli06n+yyHVS8ySe+58Vi88WR0VXbI0pjvd8gs3aGOdEEkk/Actyr0VXxDpeewALneVrUkNYCblNaxQxSXLNDJXs/BJCNqsQwKK7oY49hXgqu1a0NDf1mJ7BdaHsB6zB2PPkPkmYsk1mtnq5WGO2XfRIwB/FA4M87/NexVQ/emC0FjD2znePmk9F9ixW0gyQ0Zn6TuH15LIfULjmcSSd5U4kQ9w4Od5lJVQ5rgFoYZ0lse0yqzvjMPiVmsprQwhgs7KjR3OmfIKioS52roHAK/ghAi5E6m2tlUq9WY3EhNw7HPFnmnf2Q0z2dYFVGxQoGZkBsQWwZPCDNvAqy1qqNqFPpPWhaYEwFKaUaoYCiCWEQVQ0KYUNRLUZRC8iXlR/9k=",
  "http://square.micimpact.com/data/file/place/2105544706_3eWEAIvQ_1.jpg",
  "https://s3.ap-northeast-2.amazonaws.com/blogs.andcards.com/study-cafe-social-factory.jpg",
  "https://mblogthumb-phinf.pstatic.net/MjAxODA5MDdfMjgg/MDAxNTM2MjgxMDgyNTQw.zTyOC8jtkhvbkXoHH7RYep5vFw1qyMmcea5x9-KztNIg.Uh6MhlC7w0u5BbKXrG6-eSyzgb6Z8fMn2saB2TpqwZ4g.JPEG.okksulmin/attachImage_3882754798.jpeg?type=w800",
  "http://www.cctvnews.co.kr/news/photo/201709/71654_73323_852.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwWOy6W9iaHeiZxa14XBCOakSjShXkbVUq48ZuOyT3lCF0WPHH"
];

let parsedJSON = [];

// let query = "도곡 스터디";

fs.readFile("Accounts.partner.json", "utf-8", (err, result) => {
  if (err) throw err;
  const json = JSON.parse(result);

  json.forEach(partner => {
    partnerID.push(partner["_id"]);
  });
});

async function getTotal(query) {
  let data = await axios.get("https://openapi.naver.com/v1/search/local.json", {
    headers: {
      "X-Naver-Client-Id": "P8ZsC7I3w5RH1XSuiP4y",
      "X-Naver-Client-Secret": "nXSz9ssvYX",
      "Content-Type": "multipart/form-data"
    },
    params: {
      display: 30,
      query,
      start: 1
    }
  });
  return data.data.total;
}

async function getData(query) {
  const total = await getTotal(query);
  let crawlingData = [];

  for (let i = 1; i < total / 2; i += 30) {
    const res = await axios.get(
      "https://openapi.naver.com/v1/search/local.json",
      {
        headers: {
          "X-Naver-Client-Id": "P8ZsC7I3w5RH1XSuiP4y",
          "X-Naver-Client-Secret": "nXSz9ssvYX",
          "Content-Type": "multipart/form-data"
        },
        params: {
          display: 30,
          query,
          start: i
        }
      }
    );
    let { items } = res.data;
    crawlingData = crawlingData.concat(items);
  }

  // console.log(crawlingData);
  const parsedJSON = crawlingData.reduce((acc, room) => {
    const partner_id = partnerID[makeRandomBetween(0, partnerID.length - 1)];
    let virtualData = [];

    for (let i = 0; i < 5; i++) {
      virtualData = virtualData.concat(getRoomData(room, partner_id));
    }
    return acc.concat(virtualData);
  }, []);

  // console.log(parsedJSON);
  return parsedJSON;
}

function getRoomData(room, partner_id) {
  const { title, link, roadAddress, mapx, mapy } = room;
  const data = {
    partner_id,
    cafe_name: title,
    name: `${makeRandomBetween(100, 200)}호`,
    location: {
      type: "Point",
      coordinates: [mapy, mapx]
    },
    images: [imagesArray[makeRandomBetween(0, imagesArray.length - 1)]],
    price: makeRandomBetween(1500, 5000),
    min_personnel: makeRandomBetween(1, 4),
    max_personnel: makeRandomBetween(5, 12),
    description: `주소: ${roadAddress}\n 링크: ${link}`,
    open_time: makeRandomBetween(6, 12),
    close_time: makeRandomBetween(15, 23)
  };
  return data;
}

getData("도곡 스터디");

const makeRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// fs.readFile("gn_study.json", "utf-8", (err, result) => {
//   if (err) throw err;
//   const json = JSON.parse(result);

//   parsedJSON = json.map(room => {
//     const { title, link, roadAddress, mapx, mapy } = room;

//     const data = {
//       partner_id: partnerID[makeRandomBetween(0, partnerID.length - 1)],
//       cafe_name: title,
//       name: `${makeRandomBetween(100, 200)}호`,
//       location: {
//         type: "Point",
//         coordinates: [mapy, mapx]
//       },
//       images: [imagesArray[makeRandomBetween(0, imagesArray.length - 1)]],
//       price: makeRandomBetween(1500, 5000),
//       min_personnel: makeRandomBetween(1, 4),
//       max_personnel: makeRandomBetween(5, 12),
//       description: `주소: ${roadAddress}\n 링크: ${link}`,
//       open_time: makeRandomBetween(6, 12),
//       close_time: makeRandomBetween(15, 23)
//     };

//     return data;
//   });

//   fs.writeFile("gn_study_parsed.json", JSON.stringify(parsedJSON), err => {
//     if (err) throw err;
//     console.log(`저장 완료`);
//   });
// });

module.exports = getData;