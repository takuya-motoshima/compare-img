import './css/app.css';
import compare from 'compare-img';

/**
 * Append image item.
 */
function appendItem(url) {
  // Generate image list item element.
  const item = $('<div />', {class: 'list-group-item border-0 position-relative'})
  const rmv = $('<a href="#!" class="position-absolute p-1"><i class="fas fa-2x fa-times"></i></a>').appendTo(item);
  const spnr = $('<div class="fa-3x position-absolute translate-middle top-50 start-50"><i class="fas fa-circle-notch fa-spin" style="color: #1fda9a;"></i></div>').appendTo(item);
  const img = $('<img />', {src: url, class: 'img-thumbnail'}).appendTo(item);

  // Remove the spinner after reading the image.
  img.on('load', () => spnr.remove());

  // Set image item deletion event.
  rmv.on('click', evnt => {
    evnt.preventDefault();
    const item = $(evnt.currentTarget).closest('.list-group-item');
    item.fadeOut('fast').queue(() => {
      item.remove();

      // Disable the compare button if there are less than 2 images.
      if (timgs.find('img').length < 2)
        compareSbmt.prop('disabled', true)
    });
  });

  // Add image element of entered URL.
  timgs.append(item);
}

/**
 * Compare images.
 */
function compareImgs() {
  spnr.addClass('show');
  const imgs = [];
  for (let img of timgs.find('img'))
    imgs.push(img.src);
  console.log('imgs=', imgs)
  compare(imgs).then(res => {
    console.log('res=', res);
    spnr.removeClass('show');
    if (res)
      rslt.removeClass('text-danger').addClass('text-success').html('<i class="fas fa-check"></i> The images are all the same');
    else
      rslt.addClass('text-danger').removeClass('text-success').html('<i class="fas fa-times"></i> The images are not all the same');
  });
}

// Image list element.
const timgs = $('#timgs');

// Comparison result message.
const rslt = $('#rslt');

// Comparison result message spinner.
const spnr = $('#spnr');

// Submit button on the comparison form.
const compareSbmt = $('#frmCompare').find('[type="submit"]');

// Add event.
$('#frmUpload')
  .on('keyup blur', 'input', evnt => {
    // Activate the submit button only if there are no input errors.
    const frm = $(evnt.currentTarget).closest('form');
    const submtBtn = frm.find('button[type=submit]');
    submtBtn.prop('disabled', !frm.valid());
  })
  .validate({
    rules: {
      url: {required: true, url: true}
    },
    submitHandler: frm => {
      const url = $(frm).find('[name="url"]');
      appendItem(url.val());

      // If there are 2 or more images, enable the compare button.
      if (timgs.find('img').length > 1)
        compareSbmt.prop('disabled', false)
    }
  });
  $('#frmCompare').on('submit', evnt => {
    evnt.preventDefault();
    compareImgs();
  });

// Add a sample comparison image.
for (let img of ['src/img/sample-1.png', 'src/img/sample-2.png', 'src/img/sample-3.png'])
  appendItem(img);

// Compare images.
compareImgs();