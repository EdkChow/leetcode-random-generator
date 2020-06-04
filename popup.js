const easy = [
  'https://leetcode.com/problems/two-sum/',
  'https://leetcode.com/problems/median-of-two-sorted-arrays/',
  'https://leetcode.com/problems/fizz-buzz/',
  'https://leetcode.com/problems/longest-palindromic-substring/',
  'https://leetcode.com/problems/reverse-linked-list/',
  'https://leetcode.com/problems/merge-two-sorted-lists/',
  'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
  'https://leetcode.com/problems/reverse-integer/',
  'https://leetcode.com/problems/palindrome-number',
  'https://leetcode.com/problems/roman-to-integer',
  'https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array',
  'https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays',
  'https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence',
  'https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time',
  'https://leetcode.com/problems/consecutive-characters',
  'https://leetcode.com/problems/build-an-array-with-stack-operations',
  'https://leetcode.com/problems/destination-city',
  'https://leetcode.com/problems/kids-with-the-greatest-number-of-candies',
  'https://leetcode.com/problems/maximum-score-after-splitting-a-string',
  'https://leetcode.com/problems/reformat-the-string',
  'https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum',
  'https://leetcode.com/problems/string-matching-in-an-array',
  'https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order',
  'https://leetcode.com/problems/count-largest-group',
];

const medium = [
  'https://leetcode.com/problems/maximum-product-subarray/',
  'https://leetcode.com/problems/add-two-numbers',
  'https://leetcode.com/problems/longest-substring-without-repeating-characters',
  'https://leetcode.com/problems/longest-palindromic-substring',
  'https://leetcode.com/problems/zigzag-conversion',
  'https://leetcode.com/problems/string-to-integer-atoi',
  'https://leetcode.com/problems/container-with-most-water',
  'https://leetcode.com/problems/integer-to-roman',
  'https://leetcode.com/problems/3sum',
  'https://leetcode.com/problems/3sum-closest',
  'https://leetcode.com/problems/letter-combinations-of-a-phone-number',
  'https://leetcode.com/problems/4sum',
  'https://leetcode.com/problems/remove-nth-node-from-end-of-list',
  'https://leetcode.com/problems/generate-parentheses',
  'https://leetcode.com/problems/swap-nodes-in-pairs',
  'https://leetcode.com/problems/divide-two-integers',
  'https://leetcode.com/problems/next-permutation',
  'https://leetcode.com/problems/search-in-rotated-sorted-array',
  'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array',
  'https://leetcode.com/problems/valid-sudoku',
  'https://leetcode.com/problems/combination-sum',
  'https://leetcode.com/problems/combination-sum-ii',
  'https://leetcode.com/problems/multiply-strings',
];
const hard = [
  'https://leetcode.com/problems/median-of-two-sorted-arrays',
  'https://leetcode.com/problems/regular-expression-matching',
  'https://leetcode.com/problems/merge-k-sorted-lists',
  'https://leetcode.com/problems/reverse-nodes-in-k-group',
  'https://leetcode.com/problems/substring-with-concatenation-of-all-words',
  'https://leetcode.com/problems/longest-valid-parentheses',
  'https://leetcode.com/problems/sudoku-solver',
  'https://leetcode.com/problems/first-missing-positive',
  'https://leetcode.com/problems/trapping-rain-water',
  'https://leetcode.com/problems/wildcard-matching',
];

function redirect(array,arg) {
  const link = array[Math.floor(Math.random() * array.length)];
  chrome.tabs.create({ url: link });
  if (arg === 'easy'){
    chrome.runtime.sendMessage({greeting: "play cotton"}, function(response) {
      console.log(response.farewell);
    });
  }
  else if (arg === 'medium'){
    chrome.runtime.sendMessage({greeting: "play expresso"}, function(response) {
      console.log(response.farewell);
    });
  }
  else if (arg === 'hard'){
    chrome.runtime.sendMessage({greeting: "play 3rd"}, function(response) {
      console.log(response.farewell);
    });
  }
}

function stop() {
  chrome.runtime.sendMessage({greeting: "stop"}, function(response) {
    console.log(response.farewell);
  });
}

document.getElementById('stop').addEventListener('click', () => {
  stop()
});

document.getElementById('easy').addEventListener('click', () => {
  
  redirect(easy,'easy')
});
document.getElementById('medium').addEventListener('click', () => {
  redirect(medium,'medium')
});
document.getElementById('hard').addEventListener('click', () => {
  redirect(hard,'hard')
});
