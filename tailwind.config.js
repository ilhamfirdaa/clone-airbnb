module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {
      // backgroundImage: (theme) => ({
      //   'hero-portrait-320': "url('https://a0.muscache.com/im/pictures/8d160e0d-7043-4438-b946-0785bccb6b39.jpg?im_w=320')",
      //   'hero-portrait-480': "url('https://a0.muscache.com/im/pictures/8d160e0d-7043-4438-b946-0785bccb6b39.jpg?im_w=480')",
      //   'hero-portrait-720': "url('https://a0.muscache.com/im/pictures/8d160e0d-7043-4438-b946-0785bccb6b39.jpg?im_w=720')",
      //   'hero-portrait-1440': "url('https://a0.muscache.com/im/pictures/8d160e0d-7043-4438-b946-0785bccb6b39.jpg?im_w=1440')",
      //   'hero-portrait-1920': "url('https://a0.muscache.com/im/pictures/8d160e0d-7043-4438-b946-0785bccb6b39.jpg?im_w=1920')",
      //   'hero-landscape-320': "url('https://a0.muscache.com/im/pictures/1fe846d6-f32b-4928-8016-035964af42fa.jpg?im_w=320')",
      //   'hero-landscape-480': "url('https://a0.muscache.com/im/pictures/1fe846d6-f32b-4928-8016-035964af42fa.jpg?im_w=480')",
      //   'hero-landscape-720': "url('https://a0.muscache.com/im/pictures/1fe846d6-f32b-4928-8016-035964af42fa.jpg?im_w=720')",
      //   'hero-landscape-1440': "url('https://a0.muscache.com/im/pictures/1fe846d6-f32b-4928-8016-035964af42fa.jpg?im_w=440')",
      //   'hero-landscape-1920': "url('https://a0.muscache.com/im/pictures/1fe846d6-f32b-4928-8016-035964af42fa.jpg?im_w=920')",
      // }),
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
